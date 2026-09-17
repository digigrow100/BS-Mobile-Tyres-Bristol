import Layout from "@/layouts/Layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Layout title="Home" description="Welcome placeholder page.">
      <Header />
      <main>
        <p>Welcome. This is a placeholder page.</p>
      </main>
      <Footer />
    </Layout>
  );
}
