export default function VehicleCardSkeleton({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={`w-full rounded-lg dark:bg-gray-800 dark:border-gray-800 h-full animate-pulse ${className}`}
    >
      <div className="flex items-center justify-center h-72 mb-4 rounded">
        <svg
          className="w-32 h-32 text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M21.6809 16.9601L18.5509 9.65013C17.4909 7.17013 15.5409 7.07013 14.2309 9.43013L12.3409 12.8401C11.3809 14.5701 9.5909 14.7201 8.3509 13.1701L8.1309 12.8901C6.8409 11.2701 5.0209 11.4701 4.0909 13.3201L2.3709 16.7701C1.1609 19.1701 2.9109 22.0001 5.5909 22.0001H18.3509C20.9509 22.0001 22.7009 19.3501 21.6809 16.9601Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.4"
            d="M6.9707 8C8.62756 8 9.9707 6.65685 9.9707 5C9.9707 3.34315 8.62756 2 6.9707 2C5.31385 2 3.9707 3.34315 3.9707 5C3.9707 6.65685 5.31385 8 6.9707 8Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="px-4 pb-2">
        <div className="h-7 rounded bg-gray-700 w-64 mb-4"></div>
        <div className="flex mt-3 gap-3 justify-between">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="h-5 rounded-full bg-gray-700 mb-4 flex-1"
            ></div>
          ))}
        </div>
        <div className="mt-2">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="h-2 rounded-full bg-gray-700 mb-2.5"
            ></div>
          ))}
        </div>
      </div>
      <div className="py-4 border-t border-gray-700 px-4">
        <div className="h-6 rounded bg-gray-700 w-48 mb-4"></div>
      </div>
    </div>
  );
}
