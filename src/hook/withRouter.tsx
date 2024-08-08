import {
    useLocation,
    useNavigate,
    useParams,
  } from "react-router-dom";
  
  export function withRouter(Component: React.FC<{router: {location: object, navigate: (url: string) => void, params: object}}>) {
    function ComponentWithRouterProp(props: object) {
      const location = useLocation();
      const navigate = useNavigate();
      const params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }

  