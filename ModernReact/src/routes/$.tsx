// 404 页面
export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      padding: '20px',
    }}>
      <div style={{
        fontSize: '120px',
        fontWeight: 'bold',
        color: '#1890ff',
        lineHeight: 1,
        marginBottom: '20px',
      }}>
        404
      </div>
      <h1 style={{
        fontSize: '32px',
        fontWeight: 600,
        color: '#333',
        marginBottom: '16px',
      }}>
        页面未找到
      </h1>
      <p style={{
        fontSize: '16px',
        color: '#666',
        marginBottom: '32px',
      }}>
        抱歉，您访问的页面不存在
      </p>
      <a
        href="/"
        style={{
          display: 'inline-block',
          padding: '10px 24px',
          background: '#1890ff',
          color: '#fff',
          borderRadius: '4px',
          textDecoration: 'none',
          fontSize: '16px',
          transition: 'all 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#40a9ff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#1890ff';
        }}
      >
        返回首页
      </a>
    </div>
  );
}
