Live preview: https://zoooriiel.github.io/interactiveRatingComponent-FEM/

## What are you most proud of, and what would you do differently next time?
I’m most proud of how I managed to implement the rating system with localStorage to persist user choices between pages. The dynamic transition from the rating page to the thank-you page worked well, and the responsiveness across different devices was achieved.

Next time, I would improve the overall code efficiency by preventing the need for repeated event listeners on the submit button and rethinking how state changes are managed.

## What challenges did you encounter, and how did you overcome them?
A key challenge was dealing with localStorage and the window location (window.location.href) on the thank-you page. I initially had issues with data not being passed correctly after a page refresh or navigation, especially when using window.location.href to redirect. Ensuring that localStorage is properly linked and retrieved fixed the problem for the most part.

Another problem was the submit button occasionally not working immediately after selecting a rating. The button sometimes required a double-click to become active.

## What specific areas of your project would you like help with?
I’m looking for feedback on how to optimize the handling of the submit button’s active state, especially considering the issue of needing to click twice to trigger the submit button. I suspect it has to do with event listeners or how the button’s state is being toggled, but I’m not sure exactly why it’s happening.

Additionally, any suggestions on improving the management of localStorage and page navigation (particularly with window.location.href) would be helpful.
