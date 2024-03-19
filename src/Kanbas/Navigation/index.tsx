import { Link, useLocation } from "react-router-dom";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt } from "react-icons/fa";
function KanbasNavigation({ courses }: { courses: any[]; }) {
    const links = [
        { label: "Account", icon: <FaRegUserCircle className="fs-2 wd-white-icon" /> },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
        { label: "Courses", icon: <FaBook className="fs-2" /> },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
        { label: "Inbox", icon: <i className="fa fa-envelope-open-o fs-2"></i> },
        { label: "History", icon: <i className="fa fa-history fs-2"></i> },
        { label: "Studio", icon: <i className="fa fa-video-camera fs-2"></i> },
        { label: "Help", icon: <i className="fa fa-question fs-2"></i> }
    ];
    const { pathname } = useLocation();
    return (
        <ul className="d-none d-sm-block wd-kanbas-navigation">
            <li>
                <a href="http://northeastern.edu">
                    <img src="/images/northeastern-n.png" />
                </a>
            </li>
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                    <Link to={link.label === "Courses" ? `/Kanbas/Courses/${courses[0]._id}/Home` : `/Kanbas/${link.label}`}>
                        {link.icon} {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
export default KanbasNavigation;