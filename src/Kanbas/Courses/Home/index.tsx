import ModuleList from "../Modules/List";
import "./index.css";

function Home() {
    return (
        <div className="wd-home-body d-flex">
            <ModuleList />
            <div className="wd-course-status d-none d-lg-block" style={{ width: "250px", flexGrow: 0}}>
                <h3>Course Status</h3>
                <div className="wd-publish-status-button-group">
                    <button type="button"><i className="fa fa-times-circle"></i> Unpublished</button>
                    <button type="button"><i className="fa fa-check-circle text-success"></i> Published</button>
                </div>
                <div className="wd-course-status-button-group">
                    <a href="#"><button type="button"><i className="fa fa-download"></i> Import Existing
                        Content</button></a>
                    <a href="#"><button type="button"><i className="fa fa-creative-commons"></i> Import From
                        Commons</button></a>
                    <a href="#"><button type="button"><i className="fa fa-crosshairs"></i> Choose Home Page</button></a>
                    <a href="#"><button type="button"><i className="fa fa-bar-chart"></i> View Course Stream</button></a>
                    <a href="#"><button type="button"><i className="fa fa-volume-control-phone"></i> New
                        Announcement</button></a>
                    <a href="#"><button type="button"><i className="fa fa-bar-chart"></i> New Analytics</button></a>
                    <a href="#"><button type="button"><i className="fa fa-bell-o"></i> View Course
                        Notifications</button></a>
                </div>
                <div className="wd-coming-up-header">
                    <h5>Coming Up</h5>
                    <a href="#"><i className="fa fa-calendar"></i> View Calendar</a>
                </div>
                <hr style={{ marginTop: 0 }} />
                <ul className="wd-coming-up-body">
                    <li><a href="#"><i className="fa fa-calendar"></i> Lecture CS4550 Sep 7 at 11:45am</a></li>
                    <li><a href="#"><i className="fa fa-calendar"></i> Lecture CS4550 Sep 11 at 11:45am</a></li>
                    <li><a href="#"><i className="fa fa-calendar"></i> Lecture CS5610 Sep 11 at 6pm</a></li>
                </ul>
            </div>

        </div>
    );
}
export default Home;