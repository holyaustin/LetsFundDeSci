import { Fragment, useState } from 'react';
import NavBtn from '@/components/NavBtn'
import { NextPage } from 'next'
import Head from 'next/head'
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { type Contact } from '@iexec/web3mail';
import { fetchMyContacts, sendMail } from '@/components/web3mail/web3mail';
//import './styles.css';

export default function Main() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [displayTable, setdisplayTable] = useState(false);
  const [emailSentSuccess, setemailSentSuccess] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 5; // Number of contacts to display per page
  const pageLimit = 1;

  // Calculate the indexes of the contacts to display on the current page
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = contacts.slice(
    indexOfFirstContact,
    indexOfLastContact
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(contacts.length / contactsPerPage);

  // Function to change the current page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Generate an array of page numbers to display in the pagination section
  const getPageNumbers = () => {
    const pageNumbers: number[] = [];
    const totalPagesDisplayed = Math.min(pageLimit, totalPages);

    let startPage = 1;
    let endPage = totalPagesDisplayed;

    if (currentPage > Math.floor(pageLimit / 2)) {
      startPage = currentPage - Math.floor(pageLimit / 2);
      endPage = startPage + pageLimit - 1;

      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = endPage - pageLimit + 1;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const handleLoadAddresses = async () => {
    try {
      setLoading(true);
      const { contacts: myContacts, error } = await fetchMyContacts();
      setLoading(false);
      if (error) {
        setErrorMessage(error);
        return;
      }
      setContacts(myContacts as Contact[]);
      setdisplayTable(true);
    } catch (err) {
      console.log('[fetchMyContacts] ERROR', err);
      setLoading(false);
    }
  };

  const handleSendMessage = async (protectedData: string) => {
    try {
      setLoading(true);
      await sendMail(
        'Thank you for Supporting DeSci',
        'The entire team of the project you supported is appreciating your kind gesture. we shall not let you down. we shall continue to work on this project to help advance science for the good of all. Thank you. ',
        protectedData,
        'text/plain',
        'iExec-sandbox'
      );
      setLoading(false);
      setemailSentSuccess(true);
    } catch (err) {
      console.log('[sendEmail] ERROR', err);
      setLoading(false);
    }
  };

  return (
    <div>
    <Head>
    <title>DeSci Mail</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <Box className="my-box">
      <Button
        sx={{ display: 'block', margin: '120px auto' }}
        onClick={handleLoadAddresses}
        variant="contained"
      >
        Load Supporters addresses
      </Button>

      {errorMessage && (
        <Alert severity="error" style={{ maxWidth: 300, margin: 'auto' }}>
          {errorMessage}
        </Alert>
      )}

      {loading && (
        <CircularProgress
          sx={{ display: 'block', margin: '20px auto' }}
        ></CircularProgress>
      )}

      {displayTable && (
        <div>
          <Table
            sx={{
              maxWidth: 200,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            aria-label="simple table"
          >
            <TableHead sx={{ border: 0, borderBottom: 'none' }}>
              <TableRow sx={{ border: 0, borderBottom: 'none' }}>
                <TableCell
                  sx={{
                    border: 0,
                    borderBottom: 'none',
                    fontWeight: 600,
                    minWidth: 335,
                  }}
                >
                  Supporters Address
                </TableCell>
                <TableCell
                  sx={{
                    border: 0,
                    borderBottom: 'none',
                    fontWeight: 600,
                  }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentContacts.map((contact, index) => (
                <TableRow key={index} sx={{ border: 0, borderBottom: 'none' }}>
                  <TableCell component="th" scope="row">
                    {contact.address}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      className="ButtonSendM"
                      sx={{}}
                      onClick={() => handleSendMessage(contact.address)}
                      variant="contained"
                    >
                      Send Message
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          <Box
            sx={{
              maxWidth: 425,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {contacts.length > contactsPerPage && (
              <ul className="pagination">
                {/* Previous button */}
                <Button
                  sx={{ color: 'black' }}
                  className="page-link"
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  {'<'}
                </Button>

                {/* Page numbers */}
                {getPageNumbers().map((pageNumber, index) => (
                  <Fragment key={index}>
                    <Button
                      sx={{ color: 'black' }}
                      className="page-link"
                      onClick={() => paginate(pageNumber)}
                    >
                      {pageNumber}
                    </Button>
                  </Fragment>
                ))}

                {/* Next button */}
                <Button
                  sx={{ color: 'black' }}
                  className="page-link"
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  {'>'}
                </Button>
              </ul>
            )}
          </Box>
        </div>
      )}

      {emailSentSuccess && (
        <Alert
          severity="success"
          style={{ maxWidth: 300, margin: '30px auto' }}
        >
          The email is being sent.
        </Alert>
      )}
    </Box>
    </div>
  );
}
