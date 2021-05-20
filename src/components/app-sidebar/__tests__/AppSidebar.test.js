import AppSidebar from '../AppSidebar';
import {render} from '@testing-library/vue';
import store from '../../../store/index'


describe('<app-sdiber-link />', () => {

    it('should render an <aside> tag', () => {
        const appSidebar = render(AppSidebar);
        expect(appSidebar.container.querySelector('aside')).toBeInTheDocument();
    });
    it('should match snapshot', () => {
        const appSidebar = render(AppSidebar);
        expect(appSidebar.container.firstChild).toMatchSnapshot();
    });
    it('should render one item', () => {
        const appSidebar = render(AppSidebar, {
            props: {
                items: [{
                    "id": 0,
                    "name": "Asset 0"
                }]
            },
            global: {
                plugins: [store]
            }

        });
        expect(appSidebar.container.querySelectorAll('li').length).toBe(1);
    });
});