import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import SidebarGenerator from '../sidebarGenerator/SidebarGenerator';
import Divider from '@mui/material/Divider';

const PatientSidebar = ({ loggedUser }: { loggedUser: string }) => {
  const rootPath = `/dashboard/${loggedUser}`;
  return (
    <>
      <Divider />
      <List>
        <SidebarGenerator name='Dashboard home' icon=<MailIcon /> path='/dashboard/patient' />
        <SidebarGenerator name='Dashboard home' icon=<MailIcon /> path='/dashboard/patient/a' />
      </List>
    </>
  )
}
export default PatientSidebar