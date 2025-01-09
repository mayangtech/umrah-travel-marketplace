import { AuthCheck } from "@/components/auth/AuthCheck";
import { ProviderCard } from "@/components/providers/ProviderCard";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

const providers = [
  {
    name: "Al-Safwah Travel",
    description: "Premium Umrah packages with 5-star accommodations and dedicated guides.",
    registrationNumber: "UM123456",
    contactNumber: "+60 3-1234 5678",
    website: "https://example.com",
    imageUrl: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&q=80",
  },
  {
    name: "Barakah Tours",
    description: "Affordable and comprehensive Umrah packages for families.",
    registrationNumber: "UM789012",
    contactNumber: "+60 3-8765 4321",
    website: "https://example.com",
    imageUrl: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80",
  },
  {
    name: "Rahman Travel & Tours",
    description: "Experienced provider with 20+ years serving pilgrims.",
    registrationNumber: "UM345678",
    contactNumber: "+60 3-2468 1357",
    website: "https://example.com",
    imageUrl: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&q=80",
  },
];

const Index = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <AuthCheck>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <header className="border-b">
          <div className="container mx-auto flex items-center justify-between py-4">
            <h1 className="text-2xl font-bold text-primary">Umrah Marketplace</h1>
            {isAuthenticated && (
              <Button variant="outline" onClick={logout}>
                Logout
              </Button>
            )}
          </div>
        </header>

        <main className="container mx-auto py-8">
          <h2 className="mb-8 text-3xl font-bold">Choose Your Umrah Provider</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {providers.map((provider) => (
              <ProviderCard key={provider.registrationNumber} {...provider} />
            ))}
          </div>
        </main>
      </div>
    </AuthCheck>
  );
};

export default Index;