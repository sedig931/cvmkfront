export const addNewCustomer = async function (newCustomer) {
  try {
    newCustomer.email = newCustomer.email.toLowerCase();
    // await fetch(`http://192.168.43.142:300/customer/newCustomer`, {
    await fetch(`http://localhost:300/customer/newCustomer`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCustomer),
    });
  } catch (err) {
    throw err;
  }
};

export const deleteCustomer = async function (customerID) {
  try {
    // await fetch(`http://192.168.43.142:300/customer/newCustomer`, {
    await fetch(`http://localhost:300/customer/deleteCustomer`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ customerID: customerID }),
    });
  } catch (err) {
    throw err;
  }
};


export const checkLogin = async function (customer) {
  try {
    // 192.168.43.142
    let customerID;
    customer.email = customer.email.toLowerCase();

    // await fetch(`http://192.168.43.142:300/customer/checkLogin`, {
    await fetch(`http://localhost:300/customer/checkLogin`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    })
      .then((res) => res.json())
      .then((data) => (customerID = data._id));
    return customerID;
  } catch (err) {
    throw err;
  }
};

export const getCustomer = async function (id) {
  try {
    let customer;
    // await fetch(`http://192.168.43.142:300/getCustomer/customer/${id}`, {
    await fetch(`http://localhost:300/getCustomer/customer/${id}`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => (customer = data));
    return customer;
  } catch (err) {
    throw err;
  }
};

export const getCustomerByEmail = async function (email) {
  try {
    let customerID;
    email = email.toLowerCase();
    // await fetch(`http://192.168.43.142:300/getCustomer/customer/email`, {
    await fetch(`http://localhost:300/customer/email`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((res) => res.json())
      .then((data) => (customerID = data));
    return customerID;
  } catch (err) {
    throw err;
  }
};

export const getActiveCustomer = async function () {
  try {
    let customer;
    // await fetch(`http://192.168.43.142:300/getCustomer/activeCustomer`, {
    await fetch(`http://localhost:300/getCustomer/activeCustomer`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => (customer = data));
    return customer;
  } catch (err) {
    throw err;
  }
};

export const addFrameToCustomer = async function (frame) {
  try {
    // await fetch(`http://192.168.43.142:300/getCustomer/addFrame`, {

    await fetch(`http://localhost:300/getCustomer/addFrame`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(frame),
    });
  } catch (err) {
    throw err;
  }
};

export const deleteFrame = async function (frameNum) {
  try {
    await fetch(`http://localhost:300/getCustomer/deleteFrame`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ frameNum: frameNum }),
    });
  } catch (err) {
    throw err;
  }
}

export const searchFrame = async function (frameName) {
  try {
    // await fetch(`http://192.168.43.142:300/getCustomer/addFrame`, {
    let found;
    await fetch(`http://localhost:300/getCustomer/searchFrame`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ frameName: frameName }),
    })
      .then((res) => res.json())
      .then((data) => (found = data.frameFound));
    return found;
  } catch (err) {
    throw err;
  }
};

export const sendVerfNum = async function (receverInfo) {
  receverInfo.receverMail = receverInfo.receverMail.toLowerCase();
  try {
    await fetch(`http://localhost:300/customer/sendVerfnumber`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(receverInfo),
    });
  } catch (err) {
    throw err;
  }
};

export const changeCustomerPassword = async function (id, newPassword) {
  try {
    // await fetch(`http://192.168.43.142:300/getCustomer/customer/email`, {
    await fetch(`http://localhost:300/customer/changePassword`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id, newPassword: newPassword }),
    });
  } catch (err) {
    throw err;
  }
};

export const payPalPayment = async function () {
  try {
    let data1;
    await fetch(`http://localhost:300/payment/paypal`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ hi: "hi" }),
    })
      .then((res) => res.json())
      .then((data) => (data1 = data));
    return data1;
  } catch (err) {
    throw err;
  }
};

export const payPalCaptcuer = async function (customerToken) {
  try {
    let data1;

    await fetch(`http://localhost:300/payment/paypalCapture`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: customerToken }),
    })
      .then((res) => res.json())
      .then((data) => (data1 = data));
    return data1;
  } catch (err) {
    throw err;
  }
};

export const setPhoto = async function (dataForm) {
  try {
    await fetch(`http://localhost:300/setPhoto/setUserFramePhoto`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      body: dataForm,
    });
  } catch (err) {
    throw err;
  }
};
export const logoutNow = async function () {
  try {
    await fetch(`http://localhost:300/destroy`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    throw err;
  }
};
