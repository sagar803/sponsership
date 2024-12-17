import React, { useState } from 'react';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  ArrowUpDown
} from "lucide-react";

const DealsTable = () => {
  // Mock data array
  const allDeals = [
    { name: 'Toronto Ultra Major V', submittedBy: 'Diamond Sponsorship', roi: 1.8, date: '24 Dec 2023', amount: 62000.00, status: 'Approved' },
    { name: 'Stranger Things Experience', submittedBy: 'Diamond Sponsorship', roi: 1.74, date: '24 Dec 2023', amount: 12000.00, status: 'Pending' },
    { name: 'World Junior Hockey Championship', submittedBy: 'Diamond Sponsorship', roi: 1.54, date: '24 Dec 2023', amount: 54000.00, status: 'Pending' },
    { name: 'Ontario Basketball Association', submittedBy: 'Diamond Sponsorship', roi: 2.5, date: '24 Dec 2023', amount: 92000.00, status: 'Approved' },
    { name: 'All Your Friends Fest', submittedBy: 'Diamond Sponsorship', roi: 0.75, date: '24 Dec 2023', amount: 62000.00, status: 'Pending' },
    { name: 'Nuit Blanche', submittedBy: 'Diamond Sponsorship', roi: 1.54, date: '24 Dec 2023', amount: 47000.00, status: 'Declined' },
    { name: 'VELD', submittedBy: 'Diamond Sponsorship', roi: 2.4, date: '24 Dec 2023', amount: 54000.00, status: 'Declined' },
    { name: 'Ontario Basketball Association', submittedBy: 'Diamond Sponsorship', roi: 2.5, date: '24 Dec 2023', amount: 92000.00, status: 'Approved' },
    { name: 'Toronto Ultra Major V', submittedBy: 'Diamond Sponsorship', roi: 1.8, date: '24 Dec 2023', amount: 62000.00, status: 'Approved' },
    { name: 'Stranger Things Experience 2', submittedBy: 'Diamond Sponsorship', roi: 1.74, date: '24 Dec 2023', amount: 12000.00, status: 'Pending' },
    // Added more items to demonstrate pagination
    ...Array(50).fill(null).map((_, i) => ({
      name: `Deal ${i + 11}`,
      submittedBy: 'Diamond Sponsorship',
      roi: (Math.random() * 3 + 0.5).toFixed(2),
      date: '24 Dec 2023',
      amount: Math.floor(Math.random() * 90000 + 10000),
      status: ['Approved', 'Pending', 'Declined'][Math.floor(Math.random() * 3)]
    }))
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(allDeals.length / itemsPerPage);

  // Sorting state
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'asc'
  });

  // Handle sorting
  const handleSort = (key: any) => {
    setSortConfig((prevSort) => ({
      key,
      direction: prevSort.key === key && prevSort.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  // Sort and paginate deals
  const sortedDeals = [...allDeals].sort((a, b) => {
    if (!sortConfig.key) return 0;
    
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    
    // Convert to strings for string comparison
    if (typeof aValue === 'string' || typeof bValue === 'string') {
      const aStr = String(aValue);
      const bStr = String(bValue);
      return sortConfig.direction === 'asc' 
        ? aStr.localeCompare(bStr)
        : bStr.localeCompare(aStr);
    }
    
    // Numeric comparison
    const aNum = Number(aValue);
    const bNum = Number(bValue);
    return sortConfig.direction === 'asc' 
      ? aNum - bNum
      : bNum - aNum;
  });

  const paginatedDeals = sortedDeals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, allDeals.length);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Deals List</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">
            {startItem}-{endItem} of {allDeals.length}
          </span>
          <Button 
            variant="ghost" 
            size="icon"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold cursor-pointer" onClick={() => handleSort('name')}>
                Deal Name 
                <ArrowUpDown className={`w-4 h-4 inline-block ml-2 ${
                  sortConfig.key === 'name' ? 'text-blue-500' : ''
                }`} />
              </TableHead>
              <TableHead className="font-semibold cursor-pointer" onClick={() => handleSort('submittedBy')}>
                Submitted By 
                <ArrowUpDown className={`w-4 h-4 inline-block ml-2 ${
                  sortConfig.key === 'submittedBy' ? 'text-blue-500' : ''
                }`} />
              </TableHead>
              <TableHead className="font-semibold cursor-pointer" onClick={() => handleSort('roi')}>
                ROI 
                <ArrowUpDown className={`w-4 h-4 inline-block ml-2 ${
                  sortConfig.key === 'roi' ? 'text-blue-500' : ''
                }`} />
              </TableHead>
              <TableHead className="font-semibold cursor-pointer" onClick={() => handleSort('date')}>
                Date 
                <ArrowUpDown className={`w-4 h-4 inline-block ml-2 ${
                  sortConfig.key === 'date' ? 'text-blue-500' : ''
                }`} />
              </TableHead>
              <TableHead className="font-semibold cursor-pointer" onClick={() => handleSort('amount')}>
                Amount 
                <ArrowUpDown className={`w-4 h-4 inline-block ml-2 ${
                  sortConfig.key === 'amount' ? 'text-blue-500' : ''
                }`} />
              </TableHead>
              <TableHead className="font-semibold cursor-pointer" onClick={() => handleSort('status')}>
                Status 
                <ArrowUpDown className={`w-4 h-4 inline-block ml-2 ${
                  sortConfig.key === 'status' ? 'text-blue-500' : ''
                }`} />
              </TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedDeals.map((deal, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{deal.name}</TableCell>
                <TableCell>{deal.submittedBy}</TableCell>
                <TableCell>{deal.roi}</TableCell>
                <TableCell>{deal.date}</TableCell>
                <TableCell>${deal.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableCell>
                <TableCell>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    deal.status === 'Approved' ? 'bg-green-100 text-green-600' :
                    deal.status === 'Declined' ? 'bg-red-100 text-red-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {deal.status}
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DealsTable;