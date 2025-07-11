import { IProfiles } from '@/stores/basic.interface';

export const BasicIntro = ({
  name,
  label,
  url,
  email,
  phone,
  city,
  profiles,
}: {
  name: string;
  label: string;
  url: string;
  email: string;
  phone: string;
  city: string;
  profiles?: IProfiles[];
}) => {
  const getProfileUrl = (network: string) => {
    return profiles?.find(p => p.network === network)?.url || '';
  };

  return (
    <div className="text-center mb-8">
      {/* Name */}
      <h1 className="text-4xl font-bold tracking-wider mb-2 uppercase">
        {name}
      </h1>
      
      {/* Title/Label */}
      <div className="text-lg mb-4 font-medium">
        {label}
      </div>
      
      {/* Contact Information */}
      <div className="text-sm space-y-1">
        <div className="flex justify-center items-center space-x-4">
          {phone && (
            <span>📞 {phone}</span>
          )}
          {email && (
            <span>✉ {email}</span>
          )}
        </div>
        
        <div className="flex justify-center items-center space-x-4">
          {getProfileUrl('linkedin') && (
            <span>🔗 {getProfileUrl('linkedin')}</span>
          )}
          {getProfileUrl('github') && (
            <span>🐙 {getProfileUrl('github')}</span>
          )}
        </div>
        
        {url && (
          <div>🌐 {url}</div>
        )}
      </div>
    </div>
  );
};