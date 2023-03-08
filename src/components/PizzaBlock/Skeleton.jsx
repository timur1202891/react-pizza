import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className='pizza-block'
    speed={0}
    width={280}
    height={500}
    viewBox='0 0 280 500'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <circle cx='123' cy='123' r='123' />
    <rect x='107' y='319' rx='0' ry='0' width='0' height='1' />
    <rect x='126' y='299' rx='0' ry='0' width='0' height='1' />
    <rect x='129' y='304' rx='0' ry='0' width='0' height='1' />
    <rect x='129' y='303' rx='0' ry='0' width='0' height='1' />
    <rect x='110' y='175' rx='0' ry='0' width='0' height='1' />
    <rect x='126' y='301' rx='0' ry='0' width='1' height='0' />
    <rect x='72' y='353' rx='0' ry='0' width='0' height='1' />
    <rect x='2' y='268' rx='10' ry='10' width='249' height='27' />
    <rect x='7' y='316' rx='10' ry='10' width='239' height='93' />
    <rect x='11' y='435' rx='10' ry='10' width='93' height='33' />
    <rect x='192' y='435' rx='0' ry='0' width='0' height='4' />
    <rect x='187' y='438' rx='0' ry='0' width='0' height='9' />
    <rect x='123' y='435' rx='21' ry='21' width='116' height='42' />
    <rect x='200' y='456' rx='0' ry='0' width='0' height='3' />
  </ContentLoader>
);

export default Skeleton;
