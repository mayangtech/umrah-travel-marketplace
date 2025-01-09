import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Phone } from "lucide-react";

interface ProviderCardProps {
  name: string;
  description: string;
  registrationNumber: string;
  contactNumber: string;
  website: string;
  imageUrl: string;
}

export const ProviderCard = ({
  name,
  description,
  registrationNumber,
  contactNumber,
  website,
  imageUrl,
}: ProviderCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{name}</CardTitle>
        <CardDescription>Registration No: {registrationNumber}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <div className="flex w-full items-center gap-2">
          <Phone className="h-4 w-4" />
          <span className="text-sm">{contactNumber}</span>
        </div>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => window.open(website, "_blank")}
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          Visit Website
        </Button>
      </CardFooter>
    </Card>
  );
};