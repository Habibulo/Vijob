import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

const LanguageSwitcher = ({
  onTranslate,
}: {
  onTranslate: (lang: string) => void;
}) => {
  const handleLanguageChange = (lang: string) => {
    onTranslate(lang); // Call the onTranslate function with the selected language
  };
  return (
    <div className="mt-1">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="rounded-full">
            <img
              src="/img/flag/langkr.png"
              alt="Korean Flag"
              className="w-7 h-7 rounded-full object-cover border  border-gray-500"
            />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="z-20 fixed mt-2 -left-32 bg-white shadow-lg rounded-md gap-2 border border-gray-500"
        >
          <DropdownMenuItem onClick={() => handleLanguageChange('en')}>
            <img
              src="/img/flag/langen.png"
              alt="English Flag"
              className="w-8 h-8 rounded-full object-cover mr-2"
            />
            English
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleLanguageChange('kr')}>
            <img
              src="/img/flag/langkr.png"
              alt="Korean Flag"
              className="w-8 h-8 rounded-full object-cover mr-2"
            />
            Korean
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleLanguageChange('ru')}>
            <img
              src="/img/flag/langru.png"
              alt="Russian Flag"
              className="w-8 h-8 rounded-full object-cover mr-2"
            />
            Russian
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSwitcher;
