import React, { useState, useEffect } from 'react';
import { Card, Image, Row, Col, Button, DatePicker, Spin } from 'antd';

const { RangePicker } = DatePicker;

function ImageGallery() {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const formData = new FormData();
        // Gửi thêm thông tin nếu cần, ví dụ: formData.append('userId', 'abc');

        const response = await fetch("http://localhost:4000/api/image", {
          method: "GET",
        });

        
                const data = await response.json();
        console.log("Data from backend", data);

        // Flatten danh sách ảnh từ các object
        const allImages = data.flatMap(item => {
        return item.images.map(img => ({
            ...img,
            createdAt: item.createdAt, // nếu có trường này, hoặc dùng Date.now()
            _id: item._id,
        }));
});

setImages(allImages);
setFilteredImages(allImages);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const filterByDate = (date) => {
    setSelectedDate(date);
    if (!date) {
      setFilteredImages(images);
      return;
    }

    const filtered = images.filter((image) => {
      const imageDate = new Date(image.createdAt);
      return (
        imageDate.getDate() === date.date() &&
        imageDate.getMonth() === date.month() &&
        imageDate.getFullYear() === date.year()
      );
    });

    setFilteredImages(filtered);
  };

  const groupByDate = () => {
    const groups = {};
    filteredImages.forEach((image) => {
      const dateStr = new Date(image.createdAt).toLocaleDateString();
      if (!groups[dateStr]) {
        groups[dateStr] = [];
      }
      groups[dateStr].push(image);
    });
    return groups;
  };

  const dateGroups = groupByDate();

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        
        <Button
          style={{ marginLeft: '10px' }}
          onClick={() => {
            setSelectedDate(null);
            setFilteredImages(images);
          }}
        >
          Xem tất cả
        </Button>
      </div>

      {loading ? (
        <Spin tip="Đang tải ảnh..." />
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        Object.entries(dateGroups).map(([date, images]) => (
          <div key={date} style={{ marginBottom: '30px' }}>
            <h2>Ngày: {date}</h2>
            <Row gutter={[16, 16]}>
              {images.map((image) => (
                <Col key={image._id} xs={24} sm={12} md={8} lg={6}>
                 <Card
                    hoverable
                    cover={
                        <img
                        src={image.imageUrl}
                        alt="Uploaded"
                        style={{ width: '100%', height: '370px' }}
                        />
                    }
                    />
                </Col>
              ))}
            </Row>
          </div>
        ))
      )}
    </div>
  );
}

export default ImageGallery;
