const sendResponse = (res, statusCode , data , message = '') => {
  // Set default messages for common status codes if not provided
  const defaultMessages = {
    200: 'Success',
    201: 'Resource created successfully',
    400: 'Bad request',
    404: 'Not found',
    500: 'Internal server error',
  };

  message = message || defaultMessages[statusCode] || 'No message provided';
  res.status(statusCode).json(data);
};

  
  const handleError = (error, res) => {
    console.error(error);
    res.status(error.statusCode || 500).json({ error: error.message });
  };
  
  module.exports = { sendResponse, handleError };
  