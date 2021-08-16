using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using PilMoney.Models;

namespace PilMoney.Controllers
{
    public class DepositosController : Controller
    {
        private PilMoneyEntities db = new PilMoneyEntities();

        // GET: Depositos
        public ActionResult Index()
        {
            var depositos = db.Depositos.Include(d => d.Cuentas);
            return View(depositos.ToList());
        }

        // GET: Depositos/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Depositos depositos = db.Depositos.Find(id);
            if (depositos == null)
            {
                return HttpNotFound();
            }
            return View(depositos);
        }

        // GET: Depositos/Create
        public ActionResult Create()
        {
            ViewBag.CVU = new SelectList(db.Cuentas, "CVU", "Alias");
            return View();
        }

        // POST: Depositos/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "idDeposito,Importe,CVU,Alias")] Depositos depositos)
        {
            if (ModelState.IsValid)
            {
                db.Depositos.Add(depositos);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.CVU = new SelectList(db.Cuentas, "CVU", "Alias", depositos.CVU);
            return View(depositos);
        }

        // GET: Depositos/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Depositos depositos = db.Depositos.Find(id);
            if (depositos == null)
            {
                return HttpNotFound();
            }
            ViewBag.CVU = new SelectList(db.Cuentas, "CVU", "Alias", depositos.CVU);
            return View(depositos);
        }

        // POST: Depositos/Edit/5
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "idDeposito,Importe,CVU,Alias")] Depositos depositos)
        {
            if (ModelState.IsValid)
            {
                db.Entry(depositos).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.CVU = new SelectList(db.Cuentas, "CVU", "Alias", depositos.CVU);
            return View(depositos);
        }

        // GET: Depositos/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Depositos depositos = db.Depositos.Find(id);
            if (depositos == null)
            {
                return HttpNotFound();
            }
            return View(depositos);
        }

        // POST: Depositos/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Depositos depositos = db.Depositos.Find(id);
            db.Depositos.Remove(depositos);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
