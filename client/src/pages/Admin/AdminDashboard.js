import React from "react";
import AdminMenu from "../../components/AdminMenu";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import Footer from "../../components/Footer";
import NavbarTop from "../../components/NavbarTop";



const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <>
      <NavbarTop />
      <section className="admin-dashboard">
        <div className="container-fluid py-4">
          <div className="row g-4">
            <div className="col-lg-3">
              <AdminMenu />
            </div>
            <div className="col-lg-9">
              <div className="admin-dashboard__header">
                <div>
                  <p className="admin-dashboard__eyebrow">Welcome back</p>
                  <h2 className="admin-dashboard__title">Admin Control Center</h2>
                  <p className="admin-dashboard__subtitle">
                    Manage projects, content, and categories from one place.
                  </p>
                </div>
                <div className="admin-dashboard__actions">
                  <NavLink to="/dashboard/admin/create-product" className="btn btn-primary">
                    New Project
                  </NavLink>
                  <NavLink to="/dashboard/admin/create-blog" className="btn btn-outline-light">
                    New Blog
                  </NavLink>
                </div>
              </div>

              <div className="admin-dashboard__cards">
                <div className="admin-card">
                  <h4>Admin Name</h4>
                  <p>{auth?.user?.name || "—"}</p>
                </div>
                <div className="admin-card">
                  <h4>Admin Email</h4>
                  <p>{auth?.user?.email || "—"}</p>
                </div>
                <div className="admin-card">
                  <h4>Admin Contact</h4>
                  <p>{auth?.user?.phone || "—"}</p>
                </div>
              </div>

              <div className="admin-quick-links">
                <h3>Quick Actions</h3>
                <div className="row g-3">
                  <div className="col-md-4">
                    <NavLink to="/dashboard/admin/create-category" className="admin-link-card">
                      Create Category
                      <span>Organize your services and projects.</span>
                    </NavLink>
                  </div>
                  <div className="col-md-4">
                    <NavLink to="/dashboard/admin/project" className="admin-link-card">
                      Manage Projects
                      <span>Update, edit, and publish project listings.</span>
                    </NavLink>
                  </div>
                  <div className="col-md-4">
                    <NavLink to="/dashboard/admin/blog" className="admin-link-card">
                      Manage Blogs
                      <span>Publish new stories and updates.</span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AdminDashboard;
