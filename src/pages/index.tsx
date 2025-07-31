import CodePanel from '@/components/CodePanel';
import Header from '@/components/Header';
import MainContent from '@/components/MainContent';
import Sidebar from '@/components/Sidebar';

const Index = () => {
  return (
    <div className='h-screen bg-background overflow-hidden'>
      <Header />
      <div className='flex'>
        <div className='w-64 h-full'>
          <Sidebar />
        </div>

        <div className='flex-1 h-full flex'>
          {/* Content */}
          <div className='flex-1 h-full overflow-y-auto'>
            <MainContent />
          </div>

          {/* Right Code Panel */}
          <div className='h-full border-l border-border overflow-y-auto w-[535px]'>
            <div className='p-6'>
              <CodePanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
