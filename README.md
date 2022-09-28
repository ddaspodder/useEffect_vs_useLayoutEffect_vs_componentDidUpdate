# useEffect_vs_useLayoutEffect_vs_componentDidUpdate


The function passed inside useEffect is fired after the DOM update is painted on the screen, but useLayoutEffect is fired sychronously after DOM update before it is painted on the screen. 
useLayoutEffect has lesser performance but dont cause any visual inconsistency

componentDidUpdate fires at the same time as useLayoutEffect. 

