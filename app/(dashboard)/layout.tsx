import { Header } from '../components/Header';

type Props = {
   children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
   return (
      <>
         <main className=''>
            <Header />
            {children}
         </main>
      </>
   );
};

export default DashboardLayout;
