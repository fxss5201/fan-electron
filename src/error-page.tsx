import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router-dom'
import { Button, Result } from 'antd'
import { useIntl } from 'react-intl'
import { ResultStatusType } from 'antd/es/result';

function ErrorPage() {
  const error: unknown = useRouteError()
  const navigate = useNavigate()
  const intl = useIntl()
  let subTitle = ''
  
  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        subTitle = intl.formatMessage({id: '404subTitle'})
        break;
  
      case 403:
        subTitle = intl.formatMessage({id: '403subTitle'})
        break;
    
      default:
        subTitle = intl.formatMessage({id: '500subTitle'})
        break;
    }
  
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Result
          status={error?.status as ResultStatusType | undefined}
          title={error?.status}
          subTitle={subTitle}
          extra={<Button type="primary" onClick={() => navigate('/')}>{intl.formatMessage({id: 'Back Home'})}</Button>}
        />
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <h1>{error.message}</h1>
      </div>
    );
  } else {
    return <></>;
  }
}

export default ErrorPage
