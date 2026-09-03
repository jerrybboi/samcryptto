import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-shell">
      <p className="system-label">404 / NOT FOUND</p>
      <h1 className="display-title">Archive entry missing.</h1>
      <p className="display-copy">The page you requested does not exist in Sammy's portfolio.</p>
      <Link className="primary-button inline-button" href="/">
        RETURN HOME
      </Link>
    </section>
  );
}
