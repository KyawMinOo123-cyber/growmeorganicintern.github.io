import { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Table = () => {
  const [postData, setPostData] = useState<PostData[]>([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data: PostData[] = await response.json();
        setPostData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
   <div>
        <div className="table-container" style={{ height: 400, width: '100%' }}>
        <DataGrid rows={postData} columns={getColumns()}/>
        </div>
        
   </div>
  );
};

const getColumns = () => {
  const isSmallScreen = window.innerWidth <= 600;

  const columns: GridColDef[] = [
    { field: 'userId', headerName: 'User ID', width: isSmallScreen ? 80 : 100 },
    { field: 'id', headerName: 'ID', width: isSmallScreen ? 80 : 100 },
    { field: 'title', headerName: 'Title', width: isSmallScreen ? 150 : 200 },
    { field: 'body', headerName: 'Body', width: isSmallScreen ? 100 : 700 },
  ];

  return columns;
};

export default Table;