import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavLink
                        to="/"
                        className={({ isActive }) => {
                            return isActive ? 'text-blue-500' : 'text-black';
                        }}
                    >Home
                    </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavLink
                        to="/add"
                        className={({ isActive }) => {
                            return isActive ? 'text-blue-500' : 'text-black';
                        }}
                    >Add user
                    </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavLink
                        to="/create"
                        className={({ isActive }) => {
                            return isActive ? 'text-blue-500' : 'text-black';
                        }}
                    >Create PDF
                    </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavLink
                        to="/history"
                        className={({ isActive }) => {
                            return isActive ? 'text-blue-500' : 'text-black';
                        }}
                    >History
                    </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavLink
                        to="/listeusers"
                        className={({ isActive }) => {
                            return isActive ? 'text-blue-500' : 'text-black';
                        }}
                    >Liste Users
                    </NavLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default Navbar;
