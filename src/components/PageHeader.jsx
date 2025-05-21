export default function PageHeader({ title, breadcrumb, children }) {
    return (
      <div className="flex items-center justify-between p-4">
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold">{title}</h1>
          {breadcrumb && (
            <div className="text-gray-500 mt-2">
              {breadcrumb}
            </div>
          )}
        </div>
        <div>{children}</div>
      </div>
    );
  }
  