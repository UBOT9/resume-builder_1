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

  const linkedinUrl = getProfileUrl('linkedin');
  const githubUrl = getProfileUrl('github');

  return (
    <div className="text-center mb-8 border-b border-gray-300 pb-6">
      {/* Name - Large and Bold */}
      <h1 className="text-4xl font-bold tracking-wider mb-3 uppercase" style={{ fontFamily: 'serif' }}>
        {name}
      </h1>
      
      {/* Professional Title/Label */}
      <div className="text-lg mb-3 font-medium text-gray-700" style={{ fontFamily: 'serif' }}>
        {label}
      </div>
      
      {/* Education/Institution Info */}
      <div className="text-base mb-4 font-medium text-gray-800" style={{ fontFamily: 'serif' }}>
        PES Modern College of Engineering • June 2025 Pass out 🌐 alokahirrao.netlify.app
      </div>
      
      {/* Contact Information with Icons */}
      <div className="flex justify-center items-center space-x-6 text-sm font-medium text-gray-700" style={{ fontFamily: 'serif' }}>
        {/* Phone */}
        {phone && (
          <div className="flex items-center space-x-1">
            <span>📞</span>
            <span>{phone}</span>
          </div>
        )}
        
        {/* Email */}
        {email && (
          <div className="flex items-center space-x-1">
            <span>✉️</span>
            <span className="underline">{email}</span>
          </div>
        )}
        
        {/* LinkedIn */}
        {linkedinUrl && (
          <div className="flex items-center space-x-1">
            <span>💼</span>
            <span className="underline">linkedin.com/in/alokahirrao</span>
          </div>
        )}
        
        {/* GitHub */}
        {githubUrl && (
          <div className="flex items-center space-x-1">
            <span>🐙</span>
            <span className="underline">github.com/alok-ahirrao</span>
          </div>
        )}
      </div>
    </div>
  );
};