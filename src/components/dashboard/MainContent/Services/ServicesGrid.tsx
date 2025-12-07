import { services } from '../../../../mocks/dashboard/services'

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {services.map((service) => (
        <div 
          key={service.id}
          className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition-shadow cursor-pointer"
        >
          <div className={`${service.iconColor} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mb-4 ml-auto mr-auto`}>
          </div>
          
          <h3 className="text-lg text-center font-semibold text-gray-900 mb-2">
            {service.title}
          </h3>
          
          <p className="text-sm text-center text-gray-600 line-clamp-3">
            {service.description}
          </p>

        </div>
      ))}
    </div>
  )
}