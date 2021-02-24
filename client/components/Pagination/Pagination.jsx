import { useRouter } from 'next/router';
import React from 'react';
import { Pagination as SUPagination } from 'semantic-ui-react'
import queryString from 'query-string'

const Pagination = ({totalGames, page, limitPerPage}) => {

  const router = useRouter();

  const totalPages = Math.ceil(totalGames/limitPerPage);
  const urlParse = queryString.parseUrl(router.asPath);

  const goToPage = (newPage) => {
    urlParse.query.page=newPage;
    const url = queryString.stringifyUrl(urlParse);
    router.push(url);
  }

  return (
    <div className='pagination'>
      <SUPagination
        defaultActivePage={page}
        totalPages={totalPages}
        firstItem={null}
        lastItem={null}
        onPageChange={(_, data) => goToPage(data.activePage)}
        boundaryRange={0}
        siblingRange={1}
        ellipsisItem={null}
      />
    </div>
  )
}

export default Pagination
