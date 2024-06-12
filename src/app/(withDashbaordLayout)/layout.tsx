
import DashboardLayout from "@/components/ui/dashboard/DashBoardLayout"
import { ReactNode } from "react"

const layout = ({ children }: { children: ReactNode }) => {
  // private route logic here:

  return (
    <DashboardLayout>{children}</DashboardLayout>
  )
}
export default layout