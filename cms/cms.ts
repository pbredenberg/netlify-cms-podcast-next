import CMS from 'netlify-cms-app';
import '../styles/index.scss'
import HomePreview from './preview-components/home';

CMS.init();

CMS.registerPreviewStyle('/admin/assets/main.css');

// Register all the preview components here
CMS.registerPreviewTemplate('home', HomePreview);
