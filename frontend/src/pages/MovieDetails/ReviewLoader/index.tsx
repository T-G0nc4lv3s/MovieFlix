import ContentLoader from 'react-content-loader';

const ReviewLoader = () => {
  return (
    <ContentLoader
      width={800}
      height={160}
      viewBox="0 0 800 160"
      
      backgroundColor="transparent"
      /*
      foregroundColor="#ecebeb"
      */
    >
      <rect x="80" y="73" rx="3" ry="3" width="654" height="6" />
      <rect x="78" y="88" rx="3" ry="3" width="654" height="6" />
      <rect x="150" y="103" rx="3" ry="3" width="518" height="6" />
      <rect x="37" y="54" rx="32" ry="32" width="15" height="15" />
      <rect x="37" y="46" rx="0" ry="0" width="4" height="18" />
      <rect x="54" y="54" rx="32" ry="32" width="15" height="15" />
      <rect x="54" y="46" rx="0" ry="0" width="4" height="19" />
      <rect x="736" y="118" rx="32" ry="32" width="15" height="15" />
      <rect x="757" y="118" rx="32" ry="32" width="15" height="15" />
      <rect x="747" y="123" rx="0" ry="0" width="4" height="18" />
      <rect x="768" y="123" rx="0" ry="0" width="4" height="18" />
    </ContentLoader>
  );
};

ReviewLoader.metadata = {
  name: 'Pranay Binju',
  github: 'pranaybinju',
  description: 'Customer Testimonial Skeleton',
  filename: 'CustomerTestimonial',
};

export default ReviewLoader;
