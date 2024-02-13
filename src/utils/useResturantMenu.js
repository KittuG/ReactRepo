import { MENU_URL } from "../utils/constants";
import { useEffect, useState } from "react";
const useResturantMenu = (resId) => {
    const [restMenuList, setRestMenuList] = useState(null);
    useEffect(() => {
        fetchData();

    }, []);
    const fetchData = async () => {
        const restMenu = await fetch(MENU_URL + resId);
        const data = await restMenu.json();
        setRestMenuList(data.data);

    }
    return restMenuList;
}

export default useResturantMenu;