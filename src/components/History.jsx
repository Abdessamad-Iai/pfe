import { useState, useEffect } from 'react';

const History = () => {
    const [pdfData, setPdfData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/pdfs')
            .then(response => response.json())
            .then(data => setPdfData(data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-blue-500">Name</th>
                        <th className="px-4 py-2 text-blue-500">Generated Date</th>
                        <th className="px-4 py-2 text-blue-500">Last Updated</th>
                        <th className="px-4 py-2 text-blue-500">Download</th>
                    </tr>
                </thead>
                <tbody>
                    {pdfData.map((pdf) => (
                        <tr key={pdf.id}>
                            <td className="border px-4 py-2 text-center">{pdf.name}</td>
                            <td className="border px-4 py-2 text-center">{pdf.generatedDate}</td>
                            <td className="border px-4 py-2 text-center">{pdf.updatedDate}</td>
                            <td className="border px-4 py-2 text-center">
                                <a href={pdf.downloadUrl} download className="text-blue-500 hover:text-blue-700">
                                    Download
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default History;
