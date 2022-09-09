const Years = () => {
  for (let i = 2022; i <= 5000; i++) {
    return {
      id: i,
      value: i,
    };
  }
};

const DropDownData = [
  {
    id: 1,
    title: "Đơn vị thưc hiện",
    items: [
      {
        id: 1,
        value: "Công ty nhiệt điện Phú Mỹ",
      },
    ],
  },
  {
    id: 2,
    title: "Chuyên viên thực hiện",
    items: [
      {
        id: 1,
        value: "Nguyễn Văn A",
      },
      {
        id: 2,
        value: "Nguyễn Văn B",
      },
      {
        id: 3,
        value: "Nguyễn Văn C",
      },
      {
        id: 4,
        value: "Nguyễn Văn D",
      },
    ],
  },

  {
    id: 3,
    title: "Loại hồ sơ",
    items: [
      {
        id: 1,
        value: "Kế hoạch năm ",
      },
      {
        id: 2,
        value: "Kế hoạch đột suất ",
      },
    ],
  },
  {
    id: 4,
    title: "Năm kế hoạch",
    items: [],
  },
];

export { Years, DropDownData };
