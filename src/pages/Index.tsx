import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] flex flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center text-center max-w-md animate-fade-in">

        <div className="mb-10 w-16 h-[1px] bg-[#c8c4bc]" />

        <h1 className="font-montserrat text-[#1a1916] text-3xl sm:text-4xl font-light leading-tight mb-12 tracking-tight">
          Скачать приложение для удалённого доступа
        </h1>

        <a
          href="https://github.com/rustdesk/rustdesk/releases/latest"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-[#1a1916] text-[#f8f7f4] px-10 py-4 font-golos text-base font-medium tracking-wide transition-all duration-300 hover:bg-[#2d2b27] hover:gap-5 active:scale-[0.98]"
        >
          <Icon name="Download" size={18} />
          Rustdesk
        </a>

        <div className="mt-16 w-16 h-[1px] bg-[#c8c4bc]" />
      </div>
    </main>
  );
}