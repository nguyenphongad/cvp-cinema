import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopRouter() {
    const { pathname } = useLocation();

    useEffect(() => {
        // window.scrollTo({top: 0, behavior: 'smooth'});
        window.scrollTo({ top: 0 });

    }, [pathname]);

    return null;
}
export default ScrollToTopRouter;