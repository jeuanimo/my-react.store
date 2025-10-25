import { Link } from "react-router-dom";
import { IconMoodPuzzled, IconSearch } from "@tabler/icons-react";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-container">
        <div className="not-found-content">
          <div className="error-code">404</div>
          <IconMoodPuzzled stroke={2} size={100} color="white" />
          <h1>Page Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <p>
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary">
              Go to Home
            </Link>
            <Link to="/catalog" className="btn btn-secondary">
              Browse Products
            </Link>
          </div>
        </div>
        <div className="not-found-illustration">
          <div className="error-icon">
            <IconSearch size={120} stroke={1.5} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
