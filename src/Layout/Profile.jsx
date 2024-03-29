import { IoReorderThreeOutline } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const Profile = () => {
    const { user, logOut } = useContext(AuthContext)
    const handelLogOut = () => {
        logOut()
            .then(() => {
                alert('logout')
            }).catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className="">
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    <div className="navbar  bg-green-200">

                        <div className="flex-1">
                            <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden"><IoReorderThreeOutline /></label>
                            <h1 className="text-xl "><b>Dashboard</b></h1>
                        </div>

                        <div className="flex-none">
                            <div className="dropdown dropdown-end">


                            </div>
                            <div className="dropdown dropdown-end">

                                <button className="btn btn-ghost btn-circle">

                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                                <button className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                        <span className="badge badge-xs badge-primary indicator-item"></span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side" >
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-rose-300 text-base-content" style={{ fontFamily: 'sans-serif' }}>
                        <li><Link to='/profile/country'>Country Data</Link></li>
                        <li><Link to='/profile/piechart'>Pie Chart</Link></li>
                        <li><Link to='/profile/wordmap'>Word Map</Link></li>
                        <li><Link to='/profile/economicgrowth'>Economic Growth</Link></li>
                        {
                            user?.email ? (
                                <>
                                    <button onClick={handelLogOut} className="btn">Logout</button>
                                </>
                            ) : (
                                <li><Link to='/'>Login</Link></li>
                            )
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Profile;
