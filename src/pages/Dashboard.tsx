import { AuthCheck } from "@/components/auth/AuthCheck";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { CalendarDays, MessageSquare, FileText, Settings, Moon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Dashboard = () => {
  const user = {
    name: "Ahmad bin Abdullah",
    userId: "USR123456",
    status: "Confirmed",
    departure: "2024-05-15",
    paymentDue: "2024-04-15",
    booking: {
      provider: "Al-Safwah Travel",
      package: "BK789012",
      paidAmount: 12000,
      totalAmount: 15000,
    },
  };

  const paymentProgress = (user.booking.paidAmount / user.booking.totalAmount) * 100;

  return (
    <div className="min-h-screen bg-primary p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 border-2 border-white">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <div className="text-white">
              <h1 className="text-2xl font-bold">Welcome back, {user.name}</h1>
              <p className="text-primary-foreground/80">
                Manage your Umrah journey and track your progress
              </p>
            </div>
          </div>
          <Moon className="text-white h-6 w-6" />
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-primary/20 border-none text-white p-4">
            <div className="space-y-1">
              <p className="text-sm text-primary-foreground/80">User ID</p>
              <p className="text-lg font-semibold">{user.userId}</p>
            </div>
          </Card>
          <Card className="bg-primary/20 border-none text-white p-4">
            <div className="space-y-1">
              <p className="text-sm text-primary-foreground/80">Status</p>
              <p className="text-lg font-semibold">{user.status}</p>
            </div>
          </Card>
          <Card className="bg-primary/20 border-none text-white p-4">
            <div className="space-y-1">
              <p className="text-sm text-primary-foreground/80">Departure</p>
              <p className="text-lg font-semibold">{user.departure}</p>
            </div>
          </Card>
          <Card className="bg-primary/20 border-none text-white p-4">
            <div className="space-y-1">
              <p className="text-sm text-primary-foreground/80">Payment Due</p>
              <p className="text-lg font-semibold">{user.paymentDue}</p>
            </div>
          </Card>
        </div>

        {/* Current Booking */}
        <Card className="bg-primary/20 border-none text-white p-6 space-y-4">
          <h2 className="text-xl font-semibold">Current Booking</h2>
          <div className="space-y-2">
            <div>
              <p className="text-sm text-primary-foreground/80">Provider</p>
              <p className="font-semibold">{user.booking.provider}</p>
            </div>
            <div>
              <p className="text-sm text-primary-foreground/80">Package</p>
              <p className="font-semibold">{user.booking.package}</p>
            </div>
          </div>
        </Card>

        {/* Payment Progress */}
        <Card className="bg-primary/20 border-none text-white p-6 space-y-4">
          <h2 className="text-xl font-semibold">Payment Progress</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-primary-foreground/80">Progress</p>
              <Progress value={paymentProgress} className="h-2 bg-primary/30" />
              <div className="text-right text-sm">{paymentProgress}%</div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-primary-foreground/80">Paid Amount</p>
                <p className="text-xl font-semibold">RM {user.booking.paidAmount.toLocaleString()}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-primary-foreground/80">Total Amount</p>
                <p className="text-xl font-semibold">RM {user.booking.totalAmount.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-primary/20 border-none text-white p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-primary/30 transition-colors">
            <MessageSquare className="h-6 w-6" />
            <p className="font-semibold">Support</p>
          </Card>
          <Card className="bg-primary/20 border-none text-white p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-primary/30 transition-colors">
            <CalendarDays className="h-6 w-6" />
            <p className="font-semibold">Schedule</p>
          </Card>
          <Card className="bg-primary/20 border-none text-white p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-primary/30 transition-colors">
            <FileText className="h-6 w-6" />
            <p className="font-semibold">Documents</p>
          </Card>
          <Card className="bg-primary/20 border-none text-white p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-primary/30 transition-colors">
            <Settings className="h-6 w-6" />
            <p className="font-semibold">Settings</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;