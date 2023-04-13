## Credit:

All credit goes to https://www.youtube.com/watch?v=0fYi8SGA20k and https://github.com/adrianhajdin/project_3D_developer_portfolio.

I didn't clone repo because I was watching a video. However, I will fork some time soon.
Additionaly, some changes to layout and features were added.

## 3D: 

Firefox is the only browser that doesn't have a limit on canvas renders. Other's have 8-16 canvases limit. Thus, 3 solutions are possible: render less than a limit, render everythong under 1 canvas and have 2d frames in needed areas (takes too much cpu) or render in virtual canvases (insanle slow). I am sticking with the first solutions.

Mobiles hav limits on motions + tilt; thus, it is better to dissable for mobiles at all or have it in main sections.

## Other issues:

Old/weak pcs/laptops cannot process the page, even if loading by chunks. <= Could not find fix

Frezzes are happening on 3D elements/areas. Browsers load these areas only when shown, not when page is downloaded. <= Depends on browser

