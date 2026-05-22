import { IMAGE_BASE_URL } from "@/core/constants";

type ImageGridProps = {
  results: Array<{
    id: number;
    imagePath: string | null;
    primaryText: string;
    secondaryText?: string;
  }>;
  onClick?: (id: number) => void;
};

export const ImageGrid = ({ results, onClick }: ImageGridProps) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(180px,1fr))] gap-5">
      {results.map((result) => (
        <div
          className="block cursor-pointer overflow-hidden rounded-lg bg-gray-800 transition hover:scale-[1.02]"
          key={result.id}
          onClick={() => onClick?.(result.id)}
        >
          <img alt={result.primaryText} className="h-[280px] w-full object-cover" src={`${IMAGE_BASE_URL}${result.imagePath}`} />
          <div className="p-3 text-center">
            <p className="truncate font-semibold text-sm">{result.primaryText}</p>
            {result.secondaryText && <p className="text-gray-400 text-xs">{result.secondaryText}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};
