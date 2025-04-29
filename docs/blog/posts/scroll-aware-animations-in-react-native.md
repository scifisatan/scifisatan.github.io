---
date: 2025-04-26
title: Scroll-Aware Animations in React Native
lastUpdated: false
---

<PostDetail>

## Animation Fundamentals

Animations in mobile apps should mimic realistic motion: objects need to “overcome inertia” to start moving and have momentum before stopping.
React Native provides the `Animated` API for fine-grained control of animations. Using easing functions (e.g. `Easing.inOut`, `Easing.back`) makes motion feel natural by gradually accelerating and decelerating objects.

For example, a timing animation can be configured with an easing curve and native driver for performance:

```jsx
const fadeAnim = useRef(new Animated.Value(0)).current;
useEffect(() => {
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 1000,
    easing: Easing.out(Easing.exp),
    useNativeDriver: true,
  }).start();
}, []);
// ...
<Animated.View style={{ opacity: fadeAnim }} />;
```

With Reanimated (highly recommended in Expo for UI-thread animations), a shared value can be animated on mount:

```jsx
const opacity = useSharedValue(0);
useEffect(() => {
  opacity.value = withTiming(1, { duration: 1000, easing: Easing.linear });
}, []);
const animatedStyle = useAnimatedStyle(() => ({ opacity: opacity.value }));
// ...
<Animated.View style={animatedStyle} />;
```

Animations should be **smooth and performant**. Always enable `useNativeDriver` (for `Animated`) or use Reanimated’s worklets to run animation logic on the UI thread. Avoid heavy computation or state updates during an animation. Use springs for bouncy effects or timing for precise control.

#### Best Practices:

- Use easing (`Easing` module) to create natural acceleration/deceleration.
- Enable the native driver (`useNativeDriver: true`) for performance.
- Prefer Reanimated’s `useSharedValue` and worklets to run animations off the JS thread.
- Compose animations with `Animated.sequence()` or `parallel()` only when needed; stop animations cleanly to avoid memory leaks.
- Pre-calculate static values (e.g. header heights, snap intervals) outside render.

## Scroll Events and Performance

Handling scroll events efficiently is crucial for fluid UX. In React Native, a `ScrollView` or `FlatList` fires an `onScroll` event up to **once per frame**, providing `{ nativeEvent: { contentOffset: {x, y}, ... } }` data.
The `scrollEventThrottle` prop (in milliseconds) controls this frequency: setting it to `16` (or lower) will fire the callback every frame (~60fps).

For example:

```jsx
<Animated.ScrollView
  scrollEventThrottle={16}
  onScroll={(e) => {
    const offsetY = e.nativeEvent.contentOffset.y;
    // handle scroll position
  }}
>
  {/* content */}
</Animated.ScrollView>
```

**Throttling vs. Debouncing:** When many scroll events fire, heavy work can bog performance. _Throttling_ means handling at most one event per interval; _debouncing_ waits until scrolling stops.

In practice, use throttling (or React Native’s `scrollEventThrottle`) to limit callbacks. Use debounce if you only need to act after scrolling ends (e.g. analytics).

Because scrolls trigger rapidly, offload expensive work from the JS thread. Reanimated’s `useAnimatedScrollHandler` lets you update shared values on the UI thread without jank. Only read `e.nativeEvent` in a tight loop if needed for animations; avoid complex state updates inside `onScroll`.

#### Best Practices:

- Set `scrollEventThrottle={16}` (or ≤16) to capture every frame if animating; increase the value if not needed.
- Throttle or debounce non-animation tasks (e.g. network calls) triggered by scrolling.
- Clean up any manual listeners (`removeEventListener`) to prevent leaks.
- If using React Navigation header, remember `automaticallyAdjustContentInsets`.

## Animated Headers: Hiding and Collapsing

A common pattern is a header that shrinks or hides as content scrolls. You can base the header’s style on the scroll offset. For example, using Reanimated:

```jsx
const HEADER_HEIGHT = 200; // initial height
const scrollY = useSharedValue(0);

const scrollHandler = useAnimatedScrollHandler(event => {
  scrollY.value = event.contentOffset.y;
});

const headerStyle = useAnimatedStyle(() => ({
  height: Math.max(HEADER_HEIGHT - scrollY.value, 0),
  transform: [{ translateY: -Math.min(scrollY.value, HEADER_HEIGHT) }],
}));

return (
  <Animated.View style={[styles.header, headerStyle]}>
    <Text style={styles.headerText}>Title</Text>
  </Animated.View>
  <Animated.ScrollView onScroll={scrollHandler} scrollEventThrottle={16}>
    {/* content */}
  </Animated.ScrollView>
);
```

In this example, as `scrollY` increases, the header’s height decreases and it translates up (hiding it). Alternatively, you might interpolate:

```js
const headerStyle = useAnimatedStyle(() => {
  return {
    transform: [
      {
        translateY: interpolate(
          scrollY.value,
          [0, HEADER_HEIGHT],
          [0, -HEADER_HEIGHT],
          Extrapolation.CLAMP
        ),
      },
    ],
  };
});
```

The key is using `scrollY` (a shared value) in a worklet to drive the header’s animated style. You can also compare current and previous scroll positions to detect scroll _direction_, hiding the header only on downward scroll and showing it when scrolling up.

If using React Navigation, you may instead replace the native header with your own animated view for full control. Ensure to account for safe-area insets on iOS/Android.

#### Best Practices:

- Use `Animated.ScrollView`/`useAnimatedScrollHandler` rather than JS `onScroll` for smooth updates.
- Clamp or interpolate values to avoid negative heights or overshoot.
- Hide header only after a threshold to avoid flicker (e.g. start hiding after a few pixels).
- Test on both platforms: iOS bounces may “overscroll” the header.
- Consider accessibility: ensure users can still navigate when header is hidden.

## Scroll Snapping and Pagination

To create paginated scrolling or snap points, use built-in props. A horizontal carousel can use `snapToInterval`:

```jsx
<ScrollView horizontal snapToInterval={PAGE_WIDTH} decelerationRate="fast">
  {/* each child view has width = PAGE_WIDTH */}
</ScrollView>
```

This causes the view to snap to multiples of `PAGE_WIDTH` after a fling. For variable-size children, use `snapToOffsets`:

```jsx
<ScrollView
  snapToOffsets={[0, 150, 400]} // specified y-offsets
  snapToEnd={false}
>
  {/* children of different heights */}
</ScrollView>
```

With `snapToOffsets`, the scroll will stop at each listed offset. Combine snapping with `decelerationRate="fast"` for crisp stops. On iOS you may also use `pagingEnabled` for screen-width snaps, or use `FlatList` paging.

For finer control, you can implement snapping in Reanimated by detecting `onScrollEndDrag` or `onMomentumScrollEnd` and animating to the nearest snap point with `scrollTo`, but built-in props are simpler.

#### Best Practices:

- Match `snapToInterval` exactly to your item size for consistent snapping.
- Use `snapToOffsets` for non-uniform item sizes.
- Always pair snapping with `decelerationRate="fast"` (especially on iOS).
- On Android, consider `pagingEnabled={true}` for full-screen snaps.
- Include safe-area padding in snap calculations if header/nav changes.

## Tab Bar Animation Coordination

When using a bottom tab bar (e.g. React Navigation), you may want to hide/show it on scroll. One approach is to animate the tab bar’s position.

For example, using a context with a shared animated value (from a custom hook or context provider):

```jsx
// In a provider, track scroll direction and set tabBarY (Animated.Value or shared value)
const tabBarY = useRef(new Animated.Value(0)).current;

// In screen scroll handler:
Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
  listener: (e) => {
    // Update tabBarY via Animated or shared value (e.g. Animated.timing with toValue: scrollY > prevY ? 100 : 0)
  },
  useNativeDriver: true,
})(e);

// In bottom tab bar configuration:
<Tab.Navigator
  screenOptions={{
    tabBarStyle: {
      transform: [{ translateY: tabBarY }],
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
    },
  }}
>
  {/* ... */}
</Tab.Navigator>;
```

This slides the tab bar down (off-screen) when scrolling down, and back up when scrolling up.

There are libraries like **react-native-hide-tab-bar** that implement this pattern.
For top tab views or complex layouts, **`react-native-collapsible-tab-view`** offers built-in collapsing headers and synchronized snapping across tabs. In that library, you define a header component and multiple tab contents, and the library manages shared scroll offsets and header animation. It provides features like “diffClamp header” and “scroll snap” out of the box

#### Best Practices:

- Animate the tab bar with a `transform: translateY` on an **absolute-positioned** style to avoid layout jumps.
- Debounce header/tab toggling to prevent it from flickering on minor scrolls.
- Consider user scrolling patterns: don’t hide tab bar instantly at the slightest movement.
- Account for bottom safe-area inset when sliding the tab bar down.
- Ensure nested navigators pass scroll events to the header/tab animation context.

## Shared Animated Values Architecture

When coordinating multiple animated elements (header, content, tab bar), share animation state via React context or shared values. For example, create a context that holds a Reanimated shared value:

```jsx
// AnimationContext.js
export const AnimationContext = React.createContext(null);

// App.jsx
const scrollY = useSharedValue(0);
return (
  <AnimationContext.Provider value={{ scrollY }}>
    {/* screens and navigators */}
  </AnimationContext.Provider>
);
```

Then in any component, consume that shared value to derive animations:

```jsx
const { scrollY } = useContext(AnimationContext);
const headerStyle = useAnimatedStyle(() => ({
  // use scrollY.value to animate header, tab bar, etc.
}));
```

Shared values are designed to be updated on the UI thread for maximum responsiveness. In Reanimated 2/3, updates to shared values within a worklet are **synchronous** on the UI thread.

For example, using `useAnimatedScrollHandler` updates a shared `scrollOffset` value on the UI thread without delay.

This architecture centralizes animation state and avoids prop-drilling. You can also use `useDerivedValue` to compute new values from shared values. Keep in mind that reading `.value` outside worklets (on the JS thread) is asynchronous, similar to React state.

#### Best Practices:

- Use `useSharedValue` (Reanimated) for any value driving animations; never mix Animated.Value and shared values.
- Expose shared values via React Context or a provider to reuse across screens/components.
- Update shared values only within worklets (`useAnimatedScrollHandler`, gesture handlers) for sync updates.
- Use `useDerivedValue` or `useAnimatedReaction` to create relationships between multiple shared values.
- Avoid large or complex objects in shared values; stick to numbers, booleans, or small structs for performance.

## Citations

- [Reanimated Docs](https://docs.swmansion.com/react-native-reanimated/)
- [React Native Animated API](https://reactnative.dev/docs/animated)
- [ScrollView Documentation](https://reactnative.dev/docs/scrollview)
- [FlatList Documentation](https://reactnative.dev/docs/flatlist)
- [react-native-collapsible-tab-view GitHub](https://github.com/PedroBern/react-native-collapsible-tab-view)
- [Debounce vs Throttle Explained](https://css-tricks.com/debouncing-throttling-explained-examples/)
- [React Navigation Tab Navigator](https://reactnavigation.org/docs/tab-based-navigation/)
- [Scroll Snapping](https://reactnative.dev/docs/scrollview#snaptointerval)
- [useAnimatedScrollHandler Reference](https://docs.swmansion.com/react-native-reanimated/docs/api/useAnimatedScrollHandler/)
- [Animated.event Guide](https://reactnative.dev/docs/animated#animatedevent)
- [Best Practices for Native Driver](https://reactnative.dev/docs/animations#using-the-native-driver)

</PostDetail>
