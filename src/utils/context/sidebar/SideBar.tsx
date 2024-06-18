import { useState } from "react";
import { CategoryContext } from "../../context/context";
import { CatIcon, DogIcon, InfinityIcon } from "lucide-react";
import { CatContext } from "../../types";

const SideBar = () => {
    const [category, setCategory] = useState<CatContext>('all')
  return (
    <div>
        <CategoryContext.Provider value={category}>

        <nav className="left-menu">
            <ul>
                <li>
                    <CatIcon 
                    onClick={() => {setCategory('cat')}} 
                    className="icon" 
                    color="#d05858"
                    />
                </li>
                <li>
                    <DogIcon 
                    onClick={() => {setCategory('dog')}} 
                    className="icon" 
                    color="#5361d0"
                    />
                </li>
                <li>
                    <InfinityIcon 
                    onClick={() => {setCategory('all')}} 
                    className="icon" 
                    color="purple"
                    />
                </li>
            </ul>
    </nav>
                    </CategoryContext.Provider>
    </div>
  )
}

export default SideBar