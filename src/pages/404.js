import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout title="ページが見つかりません">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <div style={{ fontSize: "5rem", marginBottom: "1rem" }}>🗺️</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "0.5rem" }}>
          404 — ページが見つかりません
        </h1>
        <p style={{ color: "var(--color-text-muted)", marginBottom: "2rem" }}>
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link to="/" className="btn btn--primary">
          ← トップページに戻る
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
