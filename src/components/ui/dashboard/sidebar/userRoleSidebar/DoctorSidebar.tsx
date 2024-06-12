import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import SidebarGenerator from '../sidebarGenerator/SidebarGenerator';
import Divider from '@mui/material/Divider';
import { Toolbar } from '@mui/material';

const DoctorSidebar = ({ loggedUser }: { loggedUser: string }) => {
  const rootPath = `/dashboard/${loggedUser}`;
  return (
    <>
      <Toolbar />
      <Divider />
      <List>
        <SidebarGenerator name='Dashboard home' icon=<MailIcon /> path={rootPath} />
      </List>
      <Divider />
    </>
  )
}
export default DoctorSidebar