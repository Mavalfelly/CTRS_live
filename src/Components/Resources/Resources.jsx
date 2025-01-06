/* eslint-disable react/prop-types */
import { ExternalLink } from 'lucide-react';

const ResourceList = () => {
    const links = [
        {
          id: 'irs',
          name: 'IRS',
          url: 'https://www.irs.gov/',
          imgSrc: '/irs.jpg', // Replace with the actual image path or URL
          alt: 'IRS Logo',
        },
        {
          id: 'sunbiz',
          name: 'Sunbiz.org',
          url: 'https://www.sunbiz.org/',
          imgSrc: '/sunbiz.png', // Replace with the actual image path or URL
          alt: 'Sunbiz.org Logo',
        },
        {
          id: 'florida-dor',
          name: 'Florida Department of Revenue',
          url: 'https://floridarevenue.com/',
          imgSrc: '/fdr.png', // Replace with the actual image path or URL
          alt: 'Florida Department of Revenue Logo',
        },
      ];
    const flForms = [
        { 
        id: 'DR-15', 
        name: 'Sales and Use Tax Return',
        url: 'https://floridarevenue.com/Forms_library/current/dr15.pdf' // Example URL
        },
        { 
        id: 'DR-15EZ', 
        name: 'Sales and Use Tax Return Short Form',
        url: 'https://floridarevenue.com/Forms_library/current/dr15ez.pdf'
        },
        { 
        id: 'DR-15SW', 
        name: 'Solid Waste Tax Return',
        url: 'https://floridarevenue.com/Forms_library/current/dr15sw.pdf'
        },
        { 
        id: 'DR-225', 
        name: 'Doc Stamp Tax Return',
        url: 'https://floridarevenue.com/Forms_library/current/dr225.pdf'
        },
        { 
        id: 'DR-835', 
        name: 'Power of Attorney',
        url: 'https://floridarevenue.com/Forms_library/current/dr835.pdf'
        },
        { 
        id: 'RT-6', 
        name: 'Reemployment Tax Return',
        url: 'https://floridarevenue.com/Forms_library/current/rt6.pdf'
        },
        { 
        id: 'RT-8A', 
        name: 'Reemployment Tax Correction',
        url: 'https://floridarevenue.com/Forms_library/current/rt8a.pdf'
        }
    ];

    const irsForms = [
        { 
        id: 'W-4', 
        name: "Employee's Withholding Certificate",
        url: 'https://www.irs.gov/pub/irs-pdf/fw4.pdf'
        },
        { 
        id: 'W-9', 
        name: 'Request for EIN or Taxpayer Identification Number',
        url: 'https://www.irs.gov/pub/irs-pdf/fw9.pdf'
        },
        { 
        id: '4506-T', 
        name: 'Request for Transcript',
        url: 'https://www.irs.gov/pub/irs-pdf/f4506t.pdf'
        },
        { 
        id: '9465', 
        name: 'Installment Agreement Request Form',
        url: 'https://www.irs.gov/pub/irs-pdf/f9465.pdf'
        },
        { 
        id: 'Publication 15', 
        name: 'Employers Tax Guide (Circular E)',
        url: 'https://www.irs.gov/pub/irs-pdf/p15.pdf'
        }
    ];

    const FormGroup = ({ title, forms }) => (
        <div className="mb-8">
        <h2 className="text-xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-2">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {forms.map((form) => (
            <div key={form.id} className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
                <div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">{form.id}</h3>
                <p className="text-blue-600 mb-4">{form.name}</p>
                </div>
                <a 
                href={form.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium"
                >
                View
                <ExternalLink size={16} />
                </a>
            </div>
            ))}
        </div>
        </div>
    );
    const LinkGroup = () => (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-2">Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {links.map((link) => (
              <a 
                key={link.id} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src={link.imgSrc} 
                  alt={link.alt} 
                  className="w-24 h-24 mb-4 object-contain" 
                />
                <span className="text-blue-800 font-medium">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
    );
    return (
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-8">
            <div className="max-w-5xl mx-auto px-6">
                <h1 className="text-3xl font-bold mb-8 text-blue-900">Blank Forms</h1>
                <p className="text-lg text-blue-700 mb-6">Please print and fill out all applicable forms for the most streamlined process.</p>
                
                <FormGroup 
                    title="Florida Department of Revenue Forms - FL DOR" 
                    forms={flForms} 
                />
                
                <FormGroup 
                    title="Internal Revenue Service - IRS" 
                    forms={irsForms} 
                />
                <LinkGroup />
            </div>
        </div>
    );
    
};

export default ResourceList;