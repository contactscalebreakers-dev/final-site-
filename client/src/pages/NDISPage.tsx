import Header from "@/components/Header";
import NDISSection from "@/components/NDISSection";

export default function NDISPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            NDIS & Community Programs
          </h1>
          <p className="text-lg text-gray-600">
            Creative workshops and support services for NDIS participants and community organizations.
          </p>
        </div>
      </section>

      {/* NDIS Content */}
      <NDISSection />
    </div>
  );
}
