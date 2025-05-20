export interface Vehicle {
    id: string;
    model: string;
    status: 'Livre' | 'Alugada';
    user: string;
    image: string;
  }
  
  const mockVehicles: Vehicle[] = [
    {
      id: 'Moto1Screen',
      model: 'KYY-123456',
      status: 'Alugada',
      user: 'João',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 'Moto2Screen',
      model: 'KYY-154456',
      status: 'Livre',
      user: '',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 'Moto3Screen',
      model: 'KXX-159456',
      status: 'Livre',
      user: '',
      image: 'https://via.placeholder.com/100',
    },
  ];
  
  export const vehicleService = {
    async getAll(): Promise<Vehicle[]> {
      return mockVehicles;
    },
  
    async getById(id: string): Promise<Vehicle | undefined> {
      return mockVehicles.find((v) => v.id === id);
    },
  };
  