﻿using PilMoney.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PilMoney.Controllers
{
    public class VentaController : ApiController
    {
        // GET: api/Compras
        public IEnumerable<Venta> Get()
        {
            GestorVenta gVenta = new GestorVenta();
            return gVenta.ListarVenta();
        }

        // GET: api/Compras/5

        public Venta Get(int idVenta)
        {
            GestorVenta gVenta = new GestorVenta();
            return gVenta.ObtenerVentaPorId(idVenta);
        }

        // POST: api/Compras
        public void Post(Venta v)
        {
            GestorVenta gVenta = new GestorVenta();
            gVenta.RegistrarVenta(v);
        }

        // PUT: api/Compras/5


        // DELETE: api/Compras/5
        public void Delete(int idVenta)
        {
            GestorVenta gVenta = new GestorVenta();
            gVenta.EliminarVenta(idVenta);
        }
    }
}
